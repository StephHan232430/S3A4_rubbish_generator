function sampling(array) {
  let phrase = array[Math.floor(Math.random() * array.length)]
  return phrase
}

function generateRubbish(task) {
  // 將可能使用的tasks和phrases預設詞彙分別存於常數，並初始化rubbish字串
  const tasks = {
    工程師: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    設計師: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    創業家: ['週末加班', '發大財', '想個 business model', '找 VC 募錢']
  }
  const phrases = ['很簡單', '很容易', '很快', '很正常']
  let rubbish = '身為一個'

  // 錯誤訊息處理
  if (task === undefined) {
    return '必須先選擇一位幹話對象!!!'
  }

  // invoke sampling函式，依傳入之task亂數選擇對應詞彙，並亂數選擇共用詞彙，組合字串後回傳
  return rubbish = rubbish + task + '，' + sampling(tasks[task]) + '，' + sampling(phrases) + '吧！'
}

// 匯出function
module.exports = generateRubbish