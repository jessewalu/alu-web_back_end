console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

let buffer = '';

function flushLine(line) {
  console.log(`Your name is: ${line.replace(/\r$/, '')}`);
}

process.stdin.on('data', (chunk) => {
  buffer += chunk;

  let newlineIndex = buffer.indexOf('\n');
  while (newlineIndex !== -1) {
    flushLine(buffer.slice(0, newlineIndex));
    buffer = buffer.slice(newlineIndex + 1);
    newlineIndex = buffer.indexOf('\n');
  }
});

process.stdin.on('end', () => {
  if (buffer.length > 0) {
    flushLine(buffer);
    buffer = '';
  }
  console.log('This important software is now closing');
});
