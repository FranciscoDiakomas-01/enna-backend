import { promises as dns } from "dns";
export default async function isValidEmailDomain(
  domain: string
): Promise<boolean> {
  try {
    const server = await dns.resolveMx(domain);
    return server && server.length > 0;
  } catch (error) {
    try {
      await dns.lookup(domain);
      return true;
    } catch (error) {
      return false;
    }
  }
}
