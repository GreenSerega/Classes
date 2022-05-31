"use strict";
// Создать класс RangeValidator, со следующими свойствами:
// ■ from (number);
// ■ to (number);
// Реализовать getter'ы и setter'ы для обоих свойств
// Реализовать getter range, который будет возвращать массив с двумя числами диапазона
// Реализовать метод validate, который будет принимать число и проверить входит ли число в указанный диапазон. Метод возвращает значение, если значение валидно. И кинет ошибку, если нет.

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from !== "number") {
      throw new TypeError("must be number");
    }
    this._from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("must be number");
    }
    if (to < this.from) {
      throw new RangeError("value must be better");
    }
    this._to = to;
  }
  getRange() {
    return new Array().concat(this.from, this.to);
  }
  validate(number) {
    if (number >= this.from && number <= this.to) {
      return number;
    }
    throw new RangeError("must be validate");
  }
}

// Создать класс Figure3D

class Figure3D {
  constructor(value) {
    this.value = value;
  }
  getValue() {
    return 0;
  }
}

// Создать классы-потомки для Шара, Цилиндра и Куба.

class Ball extends Figure3D {
  constructor(radius) {
    super('Ball')
    this.radius = radius;
  }
  get radius() {
    return this.radius;
  }
  set radius(radius) {
    if (typeof radius !== "number") {
      throw new TypeError("must be number");
    }
    this._radius = radius;
  }
  getVolume() {
    return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
  }
}

class Cylinder extends Figure3D {
  constructor(radius, hight) {
    super("Cylinder");
    this.radius = radius;
    this.hight = hight;
  }
  get radius() {
    return this._radius;
  }
  set radius(radius) {
    if (typeof radius !== "nummber") {
      throw new TypeError("must be number");
    }
    this._radius = radius;
  }
  get hight() {
    return this._hight;
  }
  getVolume() {
    return Math.Pi * Math.pow(this.radius, 2) * this.hight;
  }
}

class Cube extends Figure3D {
  constructor(hight) {
    super("Cube");
    this.hight = hight;
  }
  get hight() {
    return this._hight;
  }
  set hight(hight) {
    if (typeof hight !== " number") {
      throw new TypeError("must be number");
    }
    this._hight = hight;
  }
  getVolume() {
    return Math.pow(this.hight, 3);
  }
}

// У всех классов должен быть метод для рассчета объема.

function getVolumeFigura(figure) {
  if (figure instanceof Figure3D) {
    return figure.getVolume().toFixed(3);
  }
  throw new TypeError("not a figure");
}
