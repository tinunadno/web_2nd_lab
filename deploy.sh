echo > mvnlog.log
echo "removing previous build..."
mvn clean > mvnlog.log
echo "packaging..."
mvn package >> mvnlog.log
echo "copying war file..."
cp target/*.war /home/yura/Applications/wildfly/wildfly-34.0.0.Beta1/standalone/deployments
echo "deploying..."
bash /home/yura/Applications/wildfly/wildfly-34.0.0.Beta1/bin/standalone.sh
