//http://stackoverflow.com/questions/21293063/how-to-programmatically-enumerate-an-enum-type-in-typescript-0-9-5

export class EnumExtension {

  static getNamesAndValues<T extends number>(e: any) {
    return EnumExtension.getNames(e).map(n => ({ name: n, value: e[n] as T }));
  }

  static getNames(e: any) {
    return EnumExtension.getObjValues(e).filter(v => typeof v === 'string') as string[];
  }

  static getValues<T extends number>(e: any) {
    return EnumExtension.getObjValues(e).filter(v => typeof v === 'number') as T[];
  }

  private static getObjValues(e: any): (number | string)[] {
    return Object.keys(e).map(k => e[k]);
  }
}
