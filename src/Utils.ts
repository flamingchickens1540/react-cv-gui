export class Utils {
    public static extend(...objs: any[]): any {
        var newObj = {};
        for (var i = 0; i < objs.length; i++) {
            var obj = objs[i];
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    // @ts-ignore
                    newObj[key] = obj[key];
                }
            }
        }
        return newObj;
    }
}