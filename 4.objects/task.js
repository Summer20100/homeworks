function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(marks) {
  if (this.marks === undefined) { 
    this.marks = [marks];
  } else {
    this.marks.push(marks);
  }
}

Student.prototype.addMarks = function(...marks) {
  if (this.marks === undefined) { 
    this.marks = [...marks];
  } else {
    this.marks.push(...marks);
  }
}

Student.prototype.getAverage = function() {
  if (this.marks === undefined) {
    return 0;
  }
  
  let sum = 0;
  this.marks.forEach((val) => {
  sum += parseInt(val);
  avg = sum / this.marks.length;
  })
  return avg;

  //return this.marks.reduce((inc, val) => (inc + val/this.marks.length), 0);
}

Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}