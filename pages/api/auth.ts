import supabase from "../../supabase.config";

export default function handler(req, res) {
  supabase.auth.api.setAuthCookie(req, res);
}
