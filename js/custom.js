// 监听壁纸加载完成
document.addEventListener('DOMContentLoaded', function() {
    const bgElement = document.getElementById('web_bg');
    if (!bgElement) return;
  
    // 获取壁纸图片地址
    const bgImage = bgElement.style.backgroundImage || getComputedStyle(bgElement).backgroundImage;
    if (!bgImage || bgImage === 'none') {
      bgElement.classList.add('loaded'); // 无壁纸时直接显示背景色
      return;
    }
  
    // 提取图片 URL
    const imgUrl = bgImage.replace(/^url\(["']?/, '').replace(/["']?\)$/, '');
    const img = new Image();
    
    // 图片加载完成后显示
    img.onload = function() {
      bgElement.classList.add('loaded');
    };
    
    // 加载失败也显示背景色
    img.onerror = function() {
      bgElement.classList.add('loaded');
    };
    
    img.src = imgUrl;
  });