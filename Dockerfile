FROM quay.io/wildfly/wildfly
RUN rm -f /opt/jboss/wildfly/standalone/deployments/*.war
ADD target/labWeb2.war /opt/jboss/wildfly/standalone/deployments/