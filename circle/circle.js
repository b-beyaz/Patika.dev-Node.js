const Pi = 3.14;

const circleArea = (radius) => {
    area=Pi * radius * radius;
    console.log(area);
};

const circleCircumference=(radius)=> {
    console.log(2 * Pi * radius);
}


module.export = circleArea;
module.export = circleCircumference;

circleArea();
circleCircumference();