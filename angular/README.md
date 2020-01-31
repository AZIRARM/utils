# LocalStorageService

Script to facilitate localstorage management for angular universal: server side rendering.

## Integration

### index.html
 Add this script

    <Script>
    if (global === undefined) {
    global var = window;
    }
    </ Script>

### app.module.ts

    import {LocalStorageService} from 'xxxxxx / LocalStorageService';

at providers add:

       providers: [ LocalStorageService, ...]

### At component

    import {LocalStorageService} from '../../assets/services/LocalStorageService';
    
    .
    .
    .
    manufacturer (
    localStorage private: LocalStorageService,
    .
    .
    .
    ) {
    .
    .
    // To retreive
    leave myVar = JSON.parse (this.localStorage.getItem ("myKey"));
    
    //to Set
    this.localStorage.setItem ("myKey", JSON.stringify (datas));
    
    }



