"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class CustomError extends Error {
}
() => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        yield axios.get();
    }
    catch (error) {
        // const CustomError = error as CustomError;
        // console.error((error as CustomError).response?.data);
        // error.response.data -> 1회성
        if (error instanceof CustomError) {
            console.error((_a = error.response) === null || _a === void 0 ? void 0 : _a.data);
            (_b = error.response) === null || _b === void 0 ? void 0 : _b.data;
        }
    }
});
