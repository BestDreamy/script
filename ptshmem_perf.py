import pandas as pd
import sys
import os
from collections import defaultdict
import csv

def main():
    if len(sys.argv) != 2:
        print(f"Usage: {sys.argv[0]} <csv_file>")
        sys.exit(1)

    csv_file = sys.argv[1]
    if not os.path.isfile(csv_file):
        print(f"Error: File '{csv_file}' not found.")
        sys.exit(1)

    df = pd.read_csv(csv_file)

    print(f"Loaded {len(df)} row(s) from {csv_file}")
    print("=" * 80)

    head_lst = []
    per_iter_us_cnt = defaultdict(int)
    per_iter_us_avg = defaultdict(float)
    per_iter_us_max = defaultdict(float)
    per_iter_us_min = defaultdict(lambda: float('inf'))
    per_iter_us_max_arg = defaultdict(str)
    per_iter_us_min_arg = defaultdict(str)

    repeats = defaultdict(int)

    for idx, row in df.iterrows():
        if idx == 0:
            head_lst = list(row.index)
            print(head_lst)
        else:
            key = ", ".join(row[head_lst[: 6]].astype(str).tolist())
            # print(key)
            per_iter_us_cnt[key] += 1
            per_iter_us_avg[key] += row['us_per_iter']
            # per_iter_us_max[key] = max(per_iter_us_max[key], row['us_per_iter'])
            if row['us_per_iter'] > per_iter_us_max[key]:
                per_iter_us_max[key] = row['us_per_iter']
                per_iter_us_max_arg[key] = str(row.index)
            # per_iter_us_min[key] = min(per_iter_us_min[key], row['us_per_iter'])
            if row['us_per_iter'] < per_iter_us_min[key]:
                per_iter_us_min[key] = row['us_per_iter']
                per_iter_us_min_arg[key] = str(row.index)

            repeats[key] = row['repeats']

    for k, v in per_iter_us_avg.items():
        per_iter_us_avg[k] = v / per_iter_us_cnt[k]
        # div = repeats[k] * 1000
        div = 1
        print("per_iter_us_avg[{}] = {}, max = {}, min = {}".format(k, per_iter_us_avg[k] / div, per_iter_us_max[k] / div, per_iter_us_min[k] / div))
        print()

    csv_rows = []
    for k in per_iter_us_avg.keys():
        # avg_time_per_op_us = per_iter_us_avg[k] / (repeats[k] * 1000)  # ns -> us
        # max_time_per_op_us = per_iter_us_max[k] / (repeats[k] * 1000)
        # min_time_per_op_us = per_iter_us_min[k] / (repeats[k] * 1000)

        csv_rows.append({
            # 'key': k,
            'min_time_per_iter': per_iter_us_min[k],
            'max_time_per_iter': per_iter_us_max[k],
        })

    output_csv = "ptshmem_perf_summary.csv"
    with open(output_csv, 'w', newline='') as f:
        if csv_rows:
            writer = csv.DictWriter(f, fieldnames=csv_rows[0].keys())
            writer.writeheader()
            writer.writerows(csv_rows)

    print(f"Summary saved to {output_csv}")

if __name__ == "__main__":
    main()