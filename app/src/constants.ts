import { Type } from '@directus/shared/types';

export const VALIDATION_TYPES = ['FAILED_VALIDATION', 'RECORD_NOT_UNIQUE'];

export const DIRECTUS_LOGO = `@developers only mode`;

/**
 * These are the system endpoints that don't have full/regular CRUD operations available.
 */
export const COLLECTIONS_DENY_LIST = [
	'directus_activity',
	'directus_collections',
	'directus_fields',
	'directus_migrations',
	'directus_relations',
	'directus_revisions',
	'directus_sessions',
	'directus_settings',
];

export const MODULE_BAR_DEFAULT = [
	{
		type: 'module',
		id: 'content',
		enabled: true,
	},
	{
		type: 'module',
		id: 'users',
		enabled: true,
	},
	{
		type: 'module',
		id: 'files',
		enabled: true,
	},
	{
		type: 'module',
		id: 'insights',
		enabled: true,
	},
	{
		type: 'module',
		id: 'docs',
		enabled: true,
	},
	{
		type: 'module',
		id: 'settings',
		enabled: true,
		locked: true,
	},
];

export const FIELD_TYPES_SELECT: Array<{ value: Type; text: string } | { divider: true }> = [
	{
		text: '$t:string',
		value: 'string',
	},
	{
		text: '$t:text',
		value: 'text',
	},
	{ divider: true },
	{
		text: '$t:boolean',
		value: 'boolean',
	},
	{ divider: true },
	{
		text: '$t:integer',
		value: 'integer',
	},
	{
		text: '$t:bigInteger',
		value: 'bigInteger',
	},
	{
		text: '$t:float',
		value: 'float',
	},
	{
		text: '$t:decimal',
		value: 'decimal',
	},
	{ divider: true },
	{
		text: '$t:geometry',
		value: 'geometry',
	},
	{ divider: true },
	{
		text: '$t:timestamp',
		value: 'timestamp',
	},
	{
		text: '$t:datetime',
		value: 'dateTime',
	},
	{
		text: '$t:date',
		value: 'date',
	},
	{
		text: '$t:time',
		value: 'time',
	},
	{ divider: true },
	{
		text: '$t:json',
		value: 'json',
	},
	{
		text: '$t:csv',
		value: 'csv',
	},
	{
		text: '$t:uuid',
		value: 'uuid',
	},
	{
		text: '$t:hash',
		value: 'hash',
	},
];

export const DEFAULT_AUTH_PROVIDER = 'local';
export const DEFAULT_AUTH_DRIVER = 'default';

export const AUTH_SSO_DRIVERS = ['oauth2', 'openid'];

/**
 * These are custom values (shoaib)
 */

export const DEFAULT_APPLICATION_NAME = "Manhour";
export const DRFAULT_APPLICATION_LOGO = "manhour";
