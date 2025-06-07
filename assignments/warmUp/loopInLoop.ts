function loopInLoop() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
      console.log('====================================');
      console.log({ i, j });
      console.log('====================================');
    }
  }
}

function loopInLoopRev() {
  for (let index = 0; index < 3; index++) {
    for (let j = index; j > 0; j--) {
      console.log('====================================');
      console.log({ index, j });
      console.log('====================================');
    }
  }
}
// 1 , 1
// 2 , 2
// 2 , 1
loopInLoop()
loopInLoopRev()