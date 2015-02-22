#/bin/sh
sed -n -e 's+.*"\(/play/[^"]*\).*+\1+gp' | sort | uniq
