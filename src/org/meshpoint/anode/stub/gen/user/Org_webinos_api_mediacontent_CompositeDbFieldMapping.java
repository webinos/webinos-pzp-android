/* This file has been automatically generated; do not edit */

package org.meshpoint.anode.stub.gen.user;

public abstract class Org_webinos_api_mediacontent_CompositeDbFieldMapping extends org.meshpoint.anode.js.JSInterface implements org.webinos.api.mediacontent.CompositeDbFieldMapping {

	private static int classId = org.meshpoint.anode.bridge.Env.getInterfaceId(org.webinos.api.mediacontent.CompositeDbFieldMapping.class);

	Org_webinos_api_mediacontent_CompositeDbFieldMapping(long instHandle) { super(instHandle); }

	public void finalize() { super.release(classId); }

	private static Object[] __args = new Object[0];

	public String compositeHandlerClass() {
		return (String)__invoke(classId, 0, __args);
	}

	public org.webinos.api.mediacontent.SingleDbFieldMapping[] fields() {
		return (org.webinos.api.mediacontent.SingleDbFieldMapping[])__invoke(classId, 1, __args);
	}

}
