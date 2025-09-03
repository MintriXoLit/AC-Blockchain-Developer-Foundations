
export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

// ✍️ TODO: Viết hàm tại đây
export function isValidBlock(block: Block): boolean {
  if( SHA256(SHA256(block.index.toString()+block.timestamp+JSON.stringify(block.transactions)+block.previous_hash)).toString()===block.current_hash)
  {return true;}
  return false; // Chỉnh lại logic
}
