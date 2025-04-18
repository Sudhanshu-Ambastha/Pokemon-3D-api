/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/galar/145.glb -o models/gltfjsx/galar/145.jsx 
Author: LunaEagle (https://sketchfab.com/LunaEagle)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/zapdos-galarian-3e7511a7bdcc474bb0d86a517c31751a
Title: Zapdos Galarian
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/galar/145.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh name="Object_202" geometry={nodes.Object_202.geometry} material={materials['pm0145_00_31-BodyBVco']} skeleton={nodes.Object_202.skeleton} scale={0.5} />
        <skinnedMesh name="Object_203" geometry={nodes.Object_203.geometry} material={materials['pm0145_00_31-BodyBVco']} skeleton={nodes.Object_203.skeleton} scale={0.5} />
        <skinnedMesh name="Object_205" geometry={nodes.Object_205.geometry} material={materials['pm0145_00_31-BodyBVco']} skeleton={nodes.Object_205.skeleton} scale={0.5} />
        <skinnedMesh name="Object_206" geometry={nodes.Object_206.geometry} material={materials['pm0145_00_31-BodyA00']} skeleton={nodes.Object_206.skeleton} scale={0.5} />
        <skinnedMesh name="Object_207" geometry={nodes.Object_207.geometry} material={materials['pm0145_00_31-BodyA00']} skeleton={nodes.Object_207.skeleton} scale={0.5} />
        <skinnedMesh name="Object_208" geometry={nodes.Object_208.geometry} material={materials['pm0145_00_31-BodyA00']} skeleton={nodes.Object_208.skeleton} scale={0.5} />
        <skinnedMesh name="Object_209" geometry={nodes.Object_209.geometry} material={materials['pm0145_00_31-LEye']} skeleton={nodes.Object_209.skeleton} scale={0.5} />
        <skinnedMesh name="Object_210" geometry={nodes.Object_210.geometry} material={materials['pm0145_00_31-LEye']} skeleton={nodes.Object_210.skeleton} scale={0.5} />
        <skinnedMesh name="Object_212" geometry={nodes.Object_212.geometry} material={materials['pm0145_00_31-BodyA00']} skeleton={nodes.Object_212.skeleton} scale={0.5} />
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/galar/145.glb')
