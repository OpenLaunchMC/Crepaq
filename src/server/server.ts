import * as fs from "fs";
import * as path from "path";

import StatusRouter from "./interface/status";
import IndexRouter from "./index";

export default function server() {
 
  App.get("/", IndexRouter);
  App.get("/status", StatusRouter);
  App.get("/forge", ForgeRouter);
  App.get("/curseforge", UnderDev)
}
