import path from 'path';

export const getModule = (modPath)=>{
    const basedir = path.resolve('./');
    const modulepath = path.resolve(basedir, modPath)
    return require(modulepath)
}
