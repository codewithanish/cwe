import supabase from "../../supabase.config";

export default function handler(req: any, res: any) {
  supabase.auth.api.setAuthCookie(req, res);
}
