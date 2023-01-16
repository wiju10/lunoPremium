export async function getLunoMyrPrice() {
    const resp = await fetch("https://api.luno.com/api/1/ticker?pair=XBTMYR")
    if (resp.status != 200) {
      return "Failed to retrieve price"
    }
    const res = await resp.json()
    return +(res.last_trade)
}

export default { getLunoMyrPrice }