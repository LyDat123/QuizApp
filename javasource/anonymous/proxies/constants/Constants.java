// This file was generated by Mendix Studio Pro.
//
// WARNING: Code you write here will be lost the next time you deploy the project.

package anonymous.proxies.constants;

import com.mendix.core.Core;

public final class Constants
{
	/**
	 * Private constructor to prevent instantiation of this class. 
	 */
	private Constants() {}

	// These are the constants for the Anonymous module

	public static java.lang.String getRegex_Mail()
	{
		return (java.lang.String)Core.getConfiguration().getConstantValue("Anonymous.Regex_Mail");
	}
}