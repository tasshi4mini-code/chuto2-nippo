// 注湯日報アプリの設定
// syncUrl   : この注湯日報の Apps Script を「ウェブアプリ」としてデプロイしたときの URL (…/exec)
// token     : Code.gs の TOKEN と同じ合言葉
// zokeiUrl  : 造型日報の Apps Script の URL（造型日報の config.js の syncUrl と同じもの）→ 温度規格の自動判定に使う
// zokeiToken: 造型日報の合言葉（造型日報の Code.gs の TOKEN）
// workers   : 作業者のプルダウンに最初から出す名前
window.SUNA_CONFIG = {
  syncUrl: "https://script.google.com/macros/s/AKfycbxoakYZQfxbFn5skX5hup3QchflJKbukwDpwL9WBhP2JnGEcJ898InrkJy3Uq8WVDKmrg/exec",
  token: "Dc7p02Bfa4s3yeH1",
  zokeiUrl: "https://script.google.com/macros/s/AKfycbwp-kFrZ8nxZ2EnCa7benxNNPrammKxK3lGQ6g6vYmsJZcwtODXVrOG6ojquwcObB3ndA/exec",
  zokeiToken: "3eAv6FdoiaIlRAW6",
  workers: ["神林","ジャヤ","バワ","デワ","ロシ","スブラタ"]
};
