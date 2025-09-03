
import {createHash} from "crypto";
export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

// ✍️ TODO: Viết hàm tại đây
function calculateHash(index: Number, timestamp: string, transactions: any[], previous_hash: string): string {
    const value = index + timestamp + JSON.stringify(transactions) + previous_hash;
    return createHash('sha256').update(value).digest('hex');
}
export function isValidBlock(block: Block): boolean {
  if( calculateHash(block.index,block.timestamp,block.transactions,block.previous_hash)===block.current_hash)
  {return true;}
  return false; // Chỉnh lại logic
}
