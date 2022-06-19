"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// const express = require("express")
// const Router = express.Router
const router = (0, express_1.Router)();
router.post("/");
router.get("/");
router.patch("/:id");
router.delete("/:id");
exports.default = router;
