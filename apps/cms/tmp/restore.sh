SCRIPT=$(readlink -f "$0")

DB_PASS=7ICiaRPFin8lH1beHJ4lDBk2DOzGbUXz
DB_USER=cms_sy93_user
DB_NAME=cms_sy93
DUMP_FILE=tmp/cms.sql
echo $DUMP_FILE
HOSTNAME=dpg-cgf8dn64daddcg6jfcog-a.singapore-postgres.render.com
PGPASSWORD="$DB_PASS" psql -h "$HOSTNAME" -U "$DB_USER" "$DB_NAME" < "$DUMP_FILE"