import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!   // ← ใช้ service key เพื่อ upload file
)

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const slip = formData.get('slip') as File
    const items = JSON.parse(formData.get('items') as string)
    const total = Number(formData.get('total'))

    // ── 1. Upload สลิปไปที่ Supabase Storage ──
    const slipBuffer = await slip.arrayBuffer()
    const fileName = `slips/${Date.now()}-${slip.name}`

    const { error: uploadError } = await supabase.storage
      .from('order-slips')
      .upload(fileName, slipBuffer, { contentType: slip.type })

    if (uploadError) throw new Error('Upload slip failed')

    // ── 2. Get public URL ──
    const { data: urlData } = supabase.storage
      .from('order-slips')
      .getPublicUrl(fileName)

    // ── 3. บันทึก Order ลง Database ──
    const { data, error } = await supabase
      .from('orders')
      .insert({
        items,
        total,
        slip_url: urlData.publicUrl,
        status: 'pending',           // pending → paid (เมื่อตรวจสอบแล้ว)
      })
      .select()
      .single()

    if (error) throw new Error('Save order failed')

    return NextResponse.json({
      success: true,
      orderId: data.id,
      createdAt: data.created_at,
    })

  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// ── GET orders (สำหรับ admin) ──
export async function GET() {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error }, { status: 500 })
  return NextResponse.json({ orders: data })
}
