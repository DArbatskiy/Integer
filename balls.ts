// Нарисовать блок схему поиска черного шара в коробке с белыми шарами
// Написать программу по блок схеме с шарами (использование массивов с рандомным
// наполнением, использование функции ввода и вывода) на любом языке
// программирования.

//индекс ячейки, куда положим черный шар
const getIndexOfBlackBall = (boxSize: number): number => {
  return Math.floor(Math.random() * boxSize)
}

//создание коробки с белыми и одним черным шаром
const createBox = (boxSize: number): number[] => {
  const indexOfBlackBall: number = getIndexOfBlackBall(boxSize)
  const box: number[] = []
  for (let i=0; i<boxSize; i++) {
    i === indexOfBlackBall ? box.push(1) : box.push(0)
  }
  return box
}

//поиск черного шара
const findBlackBall = (boxSize: number) => {
  const box = createBox(boxSize)
  for (let i=0; i<=box.length; i++) {
    if (box[i] === 0) {
      console.log(`Шар ${i+1} белого цвета, ищем дальше!`)
    } else {
      console.log(`Шар черного цвета найден.`)
      break
    }
  }
}

console.log(findBlackBall(5))

