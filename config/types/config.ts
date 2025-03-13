export type BuildMode = 'production' | 'development';

export interface BuildPaths {
   entry: string;
   build: string;
   html: string;
   src: string;
}

export interface BuildOptions {
   mode: string;
   paths: BuildPaths;
   apiUrl: string;
}
