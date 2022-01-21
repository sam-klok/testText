export class ConvertLib{
    convertLinesToColumn(txt: string, splitter: string):string {
        let a = txt.replace(/\r?\n|\r/g,"").split(splitter);

        // trim each element
        a.forEach((v,i,arr)=>{
            arr[i] = v.trim();
        });

        // remove empty elements
        let b = a.filter((e)=>{
            return e != null && e != "";
        })

        let result = b.join('\n'+ splitter + ' ');    
        return result;
    }
}