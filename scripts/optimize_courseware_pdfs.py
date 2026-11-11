import os, fitz

pdf_dir = r'e:\workspace\frm-study-console\public\courseware'

# 清理临时文件
for t in ['c2_1_1_opt.pdf', 'test_comp.pdf']:
    tp = os.path.join(pdf_dir, t)
    if os.path.exists(tp):
        os.remove(tp)

print("=== Starting Deflate & Garbage Optimization for Courseware PDFs ===")

for fname in os.listdir(pdf_dir):
    if not fname.endswith('.pdf'):
        continue
    fpath = os.path.join(pdf_dir, fname)
    orig_sz = os.path.getsize(fpath)
    
    try:
        doc = fitz.open(fpath)
        tmp_path = fpath + '.tmp'
        
        # 开启 deflate=True 压缩流，garbage=4 清除未引用冗余，clean=True 清理无用几何
        doc.save(tmp_path, garbage=4, deflate=True, clean=True)
        doc.close()
        
        opt_sz = os.path.getsize(tmp_path)
        os.replace(tmp_path, fpath)
        print(f"✓ {fname:32s}: {orig_sz/1024/1024:.2f}MB -> {opt_sz/1024/1024:.2f}MB")
    except Exception as e:
        print(f"❌ Error optimizing {fname}: {e}")

print("=== All courseware PDFs optimized! ===")
