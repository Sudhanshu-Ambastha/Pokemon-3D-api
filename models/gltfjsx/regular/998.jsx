/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 models/opt/regular/998.glb -o models/gltfjsx/regular/998.jsx 
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/998.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes['pm998_(merge)']} />
          <group name="pm0998_00_BodySkin">
            <skinnedMesh name="pm0998_00_BodySkin_1" geometry={nodes.pm0998_00_BodySkin_1.geometry} material={materials.BodyB} skeleton={nodes.pm0998_00_BodySkin_1.skeleton} />
            <skinnedMesh name="pm0998_00_BodySkin_2" geometry={nodes.pm0998_00_BodySkin_2.geometry} material={materials.BodyA} skeleton={nodes.pm0998_00_BodySkin_2.skeleton} />
            <skinnedMesh name="pm0998_00_BodySkin_3" geometry={nodes.pm0998_00_BodySkin_3.geometry} material={materials.BodyB} skeleton={nodes.pm0998_00_BodySkin_3.skeleton} />
            <skinnedMesh name="pm0998_00_BodySkin_4" geometry={nodes.pm0998_00_BodySkin_4.geometry} material={materials.eye} skeleton={nodes.pm0998_00_BodySkin_4.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('https://raw.githubusercontent.com/Sudhanshu-Ambastha/Pokemon-3D-api/main/models/opt/regular/998.glb')
