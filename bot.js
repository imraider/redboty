client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help**)(") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000") 
      .setDescription(`
	  
	         Please Chose: 
			 
${prefix}help-a ⇏    **  | لعرض الاوامر الاداريه**  

ملاحضه البوت محمي بكود الجحفله

        `)
   message.channel.sendEmbed(embed)
    
   }
   }); 
   
   client.on("message", message => {
    if (message.content === "-help-a") {
     const embed = new Discord.RichEmbed() 
         .setThumbnail(message.author.avatarURL)
         .setColor("#00FF00")
         .setDescription(`**  السيرفر الرسمي للبوت :  :dove:  https://discord.gg/bMQzZ6w :scroll:
         :hearts: رابط البوت https://discordapp.com/api/oauth2/authorize?client_id=530742921381543951&permissions=8&scope=bot: :hearts: **`)
   message.author.sendEmbed(embed)
   
   }
   });
     client.on("message", message => {
      if (message.content === "-help-a") {
       const embed = new Discord.RichEmbed() 
           .setThumbnail(message.author.avatarURL)
           .setColor("#FF0000")
           .setDescription(`**    :sleuth_or_spy::skin-tone-1: اوامر الأداره :sleuth_or_spy::skin-tone-1:**
**============ ** 

  ** -bc | رسالة جماعية الى كل اعضاء السيرفر** :mega:

  ** -clr <numbr> | مسح الشات بعدد**:information_source: 

  ** -clear | مسح الشات ** :recycle: 

  ** -mute @user <reason> | اعطاء العضو ميوت لازم رتبة <Muted>**:mute:

  ** -unmute @user | لفك الميوت عن الشخص ** :loud_sound:

  ** -kick @user <reason> | طرد الشخص من السيرفر**  :outbox_tray:

  ** -ban @user <reason> | حضر الشخص من السيرفر** :no_entry:

  ** -mutechannel | تقفيل الشات**:no_entry:

  ** -unmutechannel | فتح الشات**:on:   

  ** -ct <name> | انشاء شات**:rolling_eyes:

  ** -cv <name> | انشاء رووم فويس**:crown:

  ** -delet <name> | مسح الشات او الرووم فويس**

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`)
     message.author.sendEmbed(embed)
     
     }
     });
	        client.on("message", message => {
      if (message.content === "-help-a") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF00FF")
           .setFooter('By *LEGEND_YT#4537  ')
           .setDescription(`**__أتمنى يعجبكم البوت يا أغلى ناس:revolving_hearts: __**`)
     message.author.sendEmbed(embed)
     
     }
     });