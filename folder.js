// Folder
function Folder() {
    return new Proxy({}, {
        get: (target, property) => {
            if (!(property in target)) {
                target[property] = new Folder();
            }
            return target[property]
        }
    })
}

const rootFolder = new Folder();

rootFolder.newFolder.dir.otherDir.file = 1
rootFolder.newFolder.dir.otherDir.file.instances //?
rootFolder.newFolder.dir.file.instances //?