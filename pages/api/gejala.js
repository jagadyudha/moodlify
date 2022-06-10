import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase
      .from("gejala")
      .select("*")
      .order("kd_gejala", { ascending: true });
    res.status(200).json(data);
  } catch (e) {
    res.status(200).json({ status: "error" });
  }
}
