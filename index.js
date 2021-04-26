const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });
const chalk = require("chalk");

client.on("ready", async() => {
    console.log(chalk.bold.green("[TF] | Hesabınıza Bağlanıldı."));
    try {
        await client.request("SET_ACTIVITY", {
            pid: process.pid,
            activity: {
                details: "D E V R İ M | Karanlığa Çak Bir Kibrit!", // Durum Açıklaması
                assets: {
                    large_image: "tf_logo", // Büyük Resim İsmi
                    large_text: "Türk Federasyonu [TF]", // Büyük Resim Açıklaması
                    small_image: "tf_simgesellogo_beyaz", // Küçük Resim İsmi
                    small_text: "Biz, Her Yerdeyiz!" // Küçük Resim İsmi
                },
                buttons: [{ label: "[TF] | Ana Merkezi", url: "https://turkfederasyonu.org/tffb/" }, { label: "[TF] | Discord Merkezi", url: "https://discord.gg/W3TYTY5" }] // Bağlantılar (Label: Bağlantı Adı | URL: Bağlantı URL'si)
            }
        })
        .then(() => {
            console.log(chalk.bold.green("[TF] | Durumunuz Başarıyla Ayarlandı."));
        })
    } catch(error) {
        console.log(chalk.bold.red("[TF] | Durumunuz Ayarlanırken Bir Sorun ile Karşılaşıldı."));
    }
})

client.login({ clientId: "ClientID" }).catch((error) => {
    if(error) {
        console.log(chalk.bold.red("[TF] | Hesabınıza Bağlanılamadı."));
    }
})
