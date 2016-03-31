declare namespace Bokeh {
    export interface Callback extends Model, ICallback {}
    export interface ICallback extends IModel {}

    export var OpenURL: { new(attributes?: IOpenURL, options?: KeyVal): OpenURL };
    export interface OpenURL extends Callback, IOpenURL {}
    export interface IOpenURL extends ICallback {
        url?: string;
    }

    export var CustomJS: { new(attributes?: ICustomJS, options?: KeyVal): CustomJS };
    export interface CustomJS extends Callback, ICustomJS {}
    export interface ICustomJS extends ICallback {
        args?: {[key: string]: Model};
        code?: string;
        lang?: ScriptingLanguage;
    }
}
