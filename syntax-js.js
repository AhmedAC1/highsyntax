function highlight(code) {
  return code
    .replace(/\/(.*?)\//g, '<span class="string">$1</span>')
    .replace(/\b\d+(\.\d+)?\b/g, '<span class="number">$&</span>')
    .replace(/"(.*?)"/g, '<span class="string">$1</span>')
    .replace(/'(.*?)'/g, '<span class="string">$1</span>')
    .replace(/`(.*?)`/g, '<span class="string">$1</span>')
    .replace(/\b(const|let|var|class|break|case|catch|continue|debugger|default|do|else|finally|for|if|switch|throw|try|while|with|function|async|await|export|extends|import|return|yield|delete|in|instanceof|new|super|this|typeof|void|null|undefined|enum|implements|interface|package|private|protected|public|static)\b/g, '<span class="keyword">$1</span>')
    .replace(/\b(true|false)\b/g, '<span class="boolean">$1</span>')
    .replace(/(\+|-|\*|=|=>|<|>|\/|\?|:|\{|\[|\]|\\|\}|\.)/g, '<span class="operator">$1</span>')
    .replace(/\/\/.*/g, '<span class="comment">$&</span>')
    .replace(/\/\*(.*?)\*\//g, '<span class="comment">$&</span>')
}
