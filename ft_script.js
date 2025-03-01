/*************************************

项目名称：FT中文网
下载地址：https://t.cn/A6OudTtN
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

***************************************/

var body = $response.body;
var chxm1023 = JSON.parse(body);
const vip = '/paywall';
const qita = '/get_story_more_info';

if ($request.url.indexOf(vip) != -1){
 chxm1023 = {  "paywall" : 0,  "premium" : 1,  "expire" : "4092599349",  "standard" : 1,  "v": 2099,  "campaign_code" : "",  "latest_duration" : "yearly",  "addon" : 1 };
 body = JSON.stringify(chxm1023);
}

if ($request.url.indexOf(qita) != -1){
 body = body.replace(/\"paywall":\d+/g, '\"paywall":0');
 body = body.replace(/\"accessright":"\d+"/g, '\"accessright":"1"');
}

$done({body});