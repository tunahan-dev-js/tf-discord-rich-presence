const rpc = require("discord-rpc"),
client = new rpc.Client({ transport: "ipc" }),
chalk = require("chalk"),
ClientID = "";

client.on("ready", async() => {
//////////////////////////////////////////////////////////////////////////////////////////////////
    console.log(chalk.bold.green(`[TF] | ${client.user.username} Adlı Hesaba Bağlanıldı.`));
	const BüyükResim = "tf_logo",
	BüyükResimAçıklaması = "Türk Federasyonu [TF]", 
	KüçükResim = "tf_simgesellogo_beyaz", 
	KüçükResimAçıklaması= "Biz, Her Yerdeyiz!",
    Açıklama1 = "Karanlığa Çak Bir Kibrit!",
    Açıklama2 = "Ne Mutlu Türk'üm Diyene!";
//////////////////////////////////////////////////////////////////////////////////////////////////
    try {
        await client.request("SET_ACTIVITY", {
            pid: process.pid,
            activity: {
                details: Açıklama1,
                state: Açıklama2,
                assets: {
                    large_image: BüyükResim,
                    large_text: BüyükResimAçıklaması,
                    small_image: KüçükResim,
                    small_text: KüçükResimAçıklaması
                },
                timestamps: {
                    start: new Date().getTime()
                },
                buttons: 
                [
                    { label: "[TF] | Ana Merkezi", url: "https://turkfederasyonu.org/tffb/" }, 
                    { label: "[TF] | Discord Merkezi", url: "https://discord.gg/W3TYTY5" }
                ] // Butonlar (Label: Buton Adı | URL: Buton Bağlantısı)
            }
        })
        .then(() => {
            console.log(chalk.bold.green("[TF] | Durumunuz Başarıyla Ayarlandı."));
        })
    } catch(error) {
        console.log(chalk.bold.red("[TF] | Durumunuz Ayarlanırken Bir Sorun ile Karşılaşıldı.", error));
    }
//////////////////////////////////////////////////////////////////////////////////////////////////
})

client.login({ clientId: ClientID })
.catch((error) => {
    console.log(chalk.bold.red(`[TF] | ${client.user.username} Adlı Hesaba Bağlanılamadı.`, error));
})
