export interface ResponseDto<T>{
    data:T;
    message:string;
    success:boolean;
    statusCode:number;
}