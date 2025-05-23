/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/1014.glb -o models/gltfjsx/regular/1014.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const { scene } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/1014.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  return (
    <group {...props} dispose={null}>
      <primitive object={nodes.pm1123_00_00} />
      <primitive object={nodes.origin} />
      <primitive object={nodes.lod_group} />
      <skinnedMesh geometry={nodes.pm1123_00_00_body_a_mesh_shape.geometry} material={materials.body_a} skeleton={nodes.pm1123_00_00_body_a_mesh_shape.skeleton} rotation={[Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.pm1123_00_00_body_b_mesh_shape.geometry} material={materials.body_b_00} skeleton={nodes.pm1123_00_00_body_b_mesh_shape.skeleton} rotation={[Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.pm1123_00_00_chain_a_mesh_shape.geometry} material={materials.body_b_00} skeleton={nodes.pm1123_00_00_chain_a_mesh_shape.skeleton} rotation={[Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.pm1123_00_00_chain_b_mesh_shape.geometry} material={materials.body_b_00} skeleton={nodes.pm1123_00_00_chain_b_mesh_shape.skeleton} rotation={[Math.PI / 2, 0, 0]} />
      <group rotation={[Math.PI / 2, 0, 0]}>
        <skinnedMesh geometry={nodes.pm1123_00_00_eye_mesh_shape_mesh.geometry} material={materials.r_eye} skeleton={nodes.pm1123_00_00_eye_mesh_shape_mesh.skeleton} />
        <skinnedMesh geometry={nodes.pm1123_00_00_eye_mesh_shape_mesh_1.geometry} material={materials.r_eye} skeleton={nodes.pm1123_00_00_eye_mesh_shape_mesh_1.skeleton} />
      </group>
      <skinnedMesh geometry={nodes.pm1123_00_00_teeth_mesh_shape.geometry} material={materials.body_b_00} skeleton={nodes.pm1123_00_00_teeth_mesh_shape.skeleton} rotation={[Math.PI / 2, 0, 0]} />
      <skinnedMesh geometry={nodes.pm1123_00_00_tongue_mesh_shape.geometry} material={materials.body_b_00} skeleton={nodes.pm1123_00_00_tongue_mesh_shape.skeleton} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/1014.glb')
