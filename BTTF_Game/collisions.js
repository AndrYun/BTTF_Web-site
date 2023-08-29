// rect collision 
function rectCollision(obj1,obj2) {
    var XColl=false;
    var YColl=false;

    if ((obj1.position.x + obj1.dimensions.w >= obj2.position.x) && (obj1.position.x <= obj2.position.x + obj2.dimensions.w)) XColl = true;
    if ((obj1.position.y + obj1.dimensions.h >= obj2.position.y) && (obj1.position.y <= obj2.position.y + obj2.dimensions.h)) YColl = true;

    if (XColl&YColl){return true;}
    return false;
}