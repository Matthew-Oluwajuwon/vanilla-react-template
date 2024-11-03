import CryptoJS from "crypto-js"

export class Encryption {
  static encrypt(value: string | object): string {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(value),
      import.meta.env.VITE_SECRET_KEY as string,
    )
    return encrypted.toString()
  }

  static decrypt(value: string): string {
    try {
      const decryptedBytes = CryptoJS.AES.decrypt(
        value,
        import.meta.env.VITE_SECRET_KEY as string,
      )
      return decryptedBytes.toString(CryptoJS.enc.Utf8)
    } catch (error) {
      throw new Error(JSON.stringify(error))
    }
  }
}
