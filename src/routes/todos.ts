//TypeScriptの場合のESモジュールの書き方
import { Router } from "express";
const router = Router();

//JavaScriptの場合のCommonJSの書き方
// const express = require("express")
// const Router = express.Router

router.post("/");

router.get("/");

router.patch("/:id");

router.delete("/:id");

export default router;
