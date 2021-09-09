import PurchaseData from "@/interfaces/purchases";

interface User {
  id: number;
}

declare namespace Express {
  export interface Request {
    adminId?: number;
    user?: User;
    purchaseData?: PurchaseData;
  }
}
