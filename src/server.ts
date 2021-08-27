
/**
 * GET = busca
 * POST = Criação
 * PUT = Alteração 
 * DELETE = Deletar 
 * PATCH = Alterar uma informação específica 
 */

import { http } from "./http";
import "./websockets/client";
import "./websockets/admin"

http.listen(3333, ()=> console.log("Server is running on port 3333"));