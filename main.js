local data = []
  setInterval(() => {
    data.push(new Array(1000000).join('a'));
}, 100);

