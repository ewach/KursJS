(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject(MyClass) {
		var obj = Object.create(MyClass.prototype);
        var ret = MyClass.apply(obj, Array.prototype.slice.call(arguments, 1));
        if (ret) {return ret}
        return obj;
    }

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


